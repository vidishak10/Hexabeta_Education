'use client';

import { useState, useRef } from 'react';
import { Upload, File, Video, X, Download, Plus, FileText, Check } from 'lucide-react';
import { useAdminStore, formatFileSize, getFileIcon } from '../Store/useAdminStore';
import '../styles/Content.css';
export default function FileUploadAdmin() {
  const {
    files,
    uploading,
    uploadProgress,
    addFiles,
    removeFile,
    uploadFiles,
    exportFilesList,
    error,
  } = useAdminStore();
  
  const [activeTab, setActiveTab] = useState('upload');
  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      addFiles(selectedFiles);
    }
  };

  const handleVideoChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      addFiles(selectedFiles);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('drop-zone-active');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drop-zone-active');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drop-zone-active');
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      addFiles(droppedFiles);
    }
  };

  const handleUpload = async () => {
    try {
      const filesToUpload = files.filter((file) => file.status === 'ready');
      await uploadFiles(filesToUpload);
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  const handleExport = () => {
    const fileData = exportFilesList();
    const jsonString = JSON.stringify(fileData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'files-export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderFileIcon = (fileType) => {
    const iconType = getFileIcon(fileType);
    switch (iconType) {
      case 'image':
        return <File className="h-6 w-6" />;
      case 'video':
        return <Video className="h-6 w-6" />;
      case 'pdf':
        return <FileText className="h-6 w-6" />;
      default:
        return <FileText className="h-6 w-6" />;
    }
  };

  return (
    <div className="container">
      {/* Header and Export Button */}
      <div className="header-container">
        <h1>File Management</h1>
        <button 
          className="export-btn" 
          onClick={handleExport} 
          disabled={files.length === 0}
        >
          <Download size={16} className="mr-2" />
          Export
        </button>
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          Upload
        </button>
        <button 
          className={`tab-button ${activeTab === 'files' ? 'active' : ''}`} 
          onClick={() => setActiveTab('files')}
        >
          Files ({files.length})
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* Upload Tab */}
      {activeTab === 'upload' && (
        <div className="tab-content">
          <div 
            className="drop-zone" 
            onDragOver={handleDragOver} 
            onDragLeave={handleDragLeave} 
            onDrop={handleDrop}
          >
            <Upload className="drop-zone-icon" size={32} />
            <h3 className="drop-zone-text">Drag and drop files here</h3>
            <p className="drop-zone-subtext">or click the buttons below to select files</p>
            <div className="file-buttons">
              <div>
                <button 
                  className="file-select-btn" 
                  onClick={() => fileInputRef.current.click()}
                >
                  <Plus size={16} className="mr-2" />
                  Select Files
                </button>
                <input
                  type="file"
                  className="native-file-input"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                />
              </div>
              <div>
                <button 
                  className="file-select-btn" 
                  onClick={() => videoInputRef.current.click()}
                >
                  <Video size={16} className="mr-2" />
                  Select Videos
                </button>
                <input
                  type="file"
                  className="native-file-input"
                  ref={videoInputRef}
                  onChange={handleVideoChange}
                  accept="video/*"
                  multiple
                />
              </div>
            </div>
          </div>

          {files.length > 0 && (
            <div className="upload-section">
              <div className="upload-header">
                <h3>Selected Files</h3>
                <button
                  className="upload-btn"
                  onClick={handleUpload}
                  disabled={uploading || files.every((file) => file.status === 'uploaded')}
                >
                  {uploading ? 'Uploading...' : 'Upload All'}
                </button>
              </div>

              {uploading && (
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              )}

              <div className="file-grid">
                {files.map((file) => (
                  <div key={file.id} className="file-card">
                    <div className="file-preview">
                      {file.preview ? (
                        file.type.startsWith('video/') ? (
                          <video
                            src={file.preview}
                            className="preview-media"
                            controls={false}
                          />
                        ) : (
                          <img
                            src={file.preview}
                            alt={file.name}
                            className="preview-media"
                          />
                        )
                      ) : (
                        <div className="file-icon-container">
                          {renderFileIcon(file.type)}
                        </div>
                      )}
                      <button
                        className="remove-file-btn"
                        onClick={() => removeFile(file.id)}
                      >
                        <X size={12} />
                      </button>
                      {file.status === 'uploaded' && (
                        <div className="uploaded-badge">
                          <Check size={12} className="mr-1" /> Uploaded
                        </div>
                      )}
                    </div>
                    <div className="file-info">
                      <div className="file-name">{file.name}</div>
                      <div className="file-size">{formatFileSize(file.size)}</div>
                      {file.status === 'uploading' && (
                        <div className="file-progress">
                          <div 
                            className="progress-fill" 
                            style={{ width: `${file.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Files Tab */}
      {activeTab === 'files' && (
        <div className="tab-content">
          {files.length === 0 ? (
            <div className="empty-state">No files uploaded yet</div>
          ) : (
            <table className="files-table">
              {/* Table implementation remains the same as before */}
            </table>
          )}
        </div>
      )}
    </div>
  );
}