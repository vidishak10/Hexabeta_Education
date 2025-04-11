import { create } from 'zustand';
import axiosInstance from '../lib/axios'; // Your configured axios instance

export const useAdminStore = create((set) => ({
  files: [],
  uploading: false,
  uploadProgress: 0,
  error: null,

  // Add files to state
  addFiles: (newFiles) => {
    set((state) => ({
      files: [
        ...state.files,
        ...newFiles.map((file) => ({
          id: Math.random().toString(36).substring(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          file,
          preview: file.type.startsWith('image/') || file.type.startsWith('video/') 
            ? URL.createObjectURL(file) 
            : null,
          status: 'ready',
          progress: 0,
          uploadedAt: null,
        })),
      ],
    }));
  },

  // Remove file from state
  removeFile: (id) => {
    set((state) => ({
      files: state.files.filter((file) => file.id !== id),
    }));
  },

  // Upload files to backend
  uploadFiles: async (filesToUpload) => {
    set({ uploading: true, error: null });

    try {
      const formData = new FormData();
      filesToUpload.forEach((file) => {
        formData.append('files', file.file);
      });

      const response = await axiosInstance.post('/content/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          set({ uploadProgress: progress });
          
          // Update individual file progress
          set((state) => ({
            files: state.files.map((file) =>
              filesToUpload.some((f) => f.id === file.id)
                ? { ...file, progress, status: progress < 100 ? 'uploading' : 'uploaded' }
                : file
            ),
          }));
        },
      });

      // Mark files as uploaded with server response data
      set((state) => ({
        files: state.files.map((file) => {
          if (filesToUpload.some((f) => f.id === file.id)) {
            const serverFile = response.data.find(
              (f) => f.originalname === file.name
            );
            return {
              ...file,
              status: 'uploaded',
              progress: 100,
              uploadedAt: new Date().toISOString(),
              serverId: serverFile?.id,
              url: serverFile?.url,
            };
          }
          return file;
        }),
      }));

      return response.data;
    } catch (error) {
      set({ error: error.response?.data?.message || error.message });
      throw error;
    } finally {
      set({ uploading: false, uploadProgress: 0 });
    }
  },

  // Export files list
  exportFilesList: () => {
    const files = get().files;
    const fileData = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      status: file.status,
      uploadedAt: file.uploadedAt,
      url: file.url,
    }));

    return fileData;
  },
}));

// Helper functions
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export const getFileIcon = (fileType) => {
  if (fileType.startsWith('image/')) return 'image';
  if (fileType.startsWith('video/')) return 'video';
  if (fileType.startsWith('application/pdf')) return 'pdf';
  return 'document';
};