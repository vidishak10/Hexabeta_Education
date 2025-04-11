"use client"

import { useState, useRef } from "react"
import { Upload, File, Video, X, Download, Plus, FileText, Check } from "lucide-react"
import "../styles/Content.css"

export default function FileUploadAdmin() {
  const [files, setFiles] = useState([])
  const [activeTab, setActiveTab] = useState("upload")
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef(null)
  const videoInputRef = useRef(null)

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    if (selectedFiles.length > 0) {
      const newFiles = selectedFiles.map((file) => ({
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
        preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
        status: "ready",
        progress: 0,
        uploadedAt: null,
      }))
      setFiles([...files, ...newFiles])
    }
  }

  const handleVideoChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    if (selectedFiles.length > 0) {
      const newFiles = selectedFiles.map((file) => ({
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
        preview: URL.createObjectURL(file),
        status: "ready",
        progress: 0,
        uploadedAt: null,
      }))
      setFiles([...files, ...newFiles])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.currentTarget.classList.add("drop-zone-active")
  }

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove("drop-zone-active")
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.currentTarget.classList.remove("drop-zone-active")

    const droppedFiles = Array.from(e.dataTransfer.files)
    if (droppedFiles.length > 0) {
      const newFiles = droppedFiles.map((file) => ({
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        file: file,
        preview: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : file.type.startsWith("video/")
            ? URL.createObjectURL(file)
            : null,
        status: "ready",
        progress: 0,
        uploadedAt: null,
      }))
      setFiles([...files, ...newFiles])
    }
  }

  const removeFile = (id) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  const uploadFiles = () => {
    if (files.length === 0 || files.every((file) => file.status === "uploaded")) return

    setUploading(true)

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 5
      setUploadProgress(progress)

      // Update individual file progress
      setFiles((prevFiles) =>
        prevFiles.map((file) =>
          file.status === "ready"
            ? { ...file, progress: progress, status: progress < 100 ? "uploading" : "uploaded" }
            : file,
        ),
      )

      if (progress >= 100) {
        clearInterval(interval)
        setUploading(false)
        setUploadProgress(0)

        // Mark all files as uploaded with timestamp
        setFiles((prevFiles) =>
          prevFiles.map((file) =>
            file.status !== "uploaded" ? { ...file, status: "uploaded", uploadedAt: new Date().toISOString() } : file,
          ),
        )

        alert("Upload Complete: All files have been successfully uploaded.")
      }
    }, 200)
  }

  const exportFilesList = () => {
    const fileData = files.map((file) => ({
      name: file.name,
      size: formatFileSize(file.size),
      type: file.type,
      status: file.status,
      uploadedAt: file.uploadedAt,
    }))

    const jsonString = JSON.stringify(fileData, null, 2)
    const blob = new Blob([jsonString], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "files-export.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    alert("Export Complete: Files list has been exported as JSON.")
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  const getFileIcon = (fileType) => {
    if (fileType.startsWith("image/")) return <File className="h-6 w-6" />
    if (fileType.startsWith("video/")) return <Video className="h-6 w-6" />
    return <FileText className="h-6 w-6" />
  }

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>File Management</h1>
        <button className="export-btn" onClick={exportFilesList} disabled={files.length === 0}>
          <Download size={16} style={{ marginRight: "8px" }} />
          Export
        </button>
      </div>

      <div className="tabs-container">
        <button
          className={`tab-button ${activeTab === "upload" ? "active" : ""}`}
          onClick={() => setActiveTab("upload")}
        >
          Upload
        </button>
        <button className={`tab-button ${activeTab === "files" ? "active" : ""}`} onClick={() => setActiveTab("files")}>
          Files ({files.length})
        </button>
      </div>

      {activeTab === "upload" && (
        <div className="tab-content">
          <div className="drop-zone" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
            <Upload className="drop-zone-icon" size={32} />
            <h3 className="drop-zone-text">Drag and drop files here</h3>
            <p className="drop-zone-subtext">or click the buttons below to select files</p>
            <div className="file-buttons">
              <div>
                <button className="file-select-btn" onClick={() => fileInputRef.current.click()}>
                  <Plus size={16} style={{ marginRight: "8px" }} />
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
                <button className="file-select-btn" onClick={() => videoInputRef.current.click()}>
                  <Video size={16} style={{ marginRight: "8px" }} />
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
            <div style={{ marginTop: "20px" }}>
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}
              >
                <h3 style={{ fontSize: "16px", fontWeight: "500" }}>Selected Files</h3>
                <button
                  className="file-select-btn"
                  onClick={uploadFiles}
                  disabled={uploading || files.every((file) => file.status === "uploaded")}
                >
                  {uploading ? "Uploading..." : "Upload All"}
                </button>
              </div>

              {uploading && (
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${uploadProgress}%` }}></div>
                </div>
              )}

              <div className="file-grid">
                {files.map((file) => (
                  <div key={file.id} className="file-card">
                    <div className="file-preview">
                      {file.preview ? (
                        file.type.startsWith("video/") ? (
                          <video
                            src={file.preview}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            controls={false}
                          />
                        ) : (
                          <img
                            src={file.preview || "/placeholder.svg"}
                            alt={file.name}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        )
                      ) : (
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {getFileIcon(file.type)}
                        </div>
                      )}
                      <button
                        style={{
                          position: "absolute",
                          top: "8px",
                          right: "8px",
                          background: "#fff",
                          border: "1px solid #ccc",
                          borderRadius: "50%",
                          width: "24px",
                          height: "24px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                        onClick={() => removeFile(file.id)}
                      >
                        <X size={12} />
                      </button>
                      {file.status === "uploaded" && (
                        <div style={{ position: "absolute", bottom: "8px", right: "8px" }}>
                          <span className="badge" style={{ background: "#10b981", color: "white" }}>
                            <Check size={12} style={{ marginRight: "4px" }} /> Uploaded
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="file-info">
                      <div className="file-name">{file.name}</div>
                      <div className="file-size">{formatFileSize(file.size)}</div>
                      {file.status === "uploading" && (
                        <div className="progress-bar" style={{ height: "2px", marginTop: "8px" }}>
                          <div className="progress-fill" style={{ width: `${file.progress}%` }}></div>
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

      {activeTab === "files" && (
        <div className="tab-content">
          {files.length === 0 ? (
            <div className="empty-state">No files uploaded yet</div>
          ) : (
            <table className="files-table">
              <thead>
                <tr>
                  <th>File</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Status</th>
                  <th>Uploaded At</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr key={file.id}>
                    <td>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        {getFileIcon(file.type)}
                        <span
                          style={{
                            maxWidth: "200px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {file.name}
                        </span>
                      </div>
                    </td>
                    <td>{file.type.split("/")[1]}</td>
                    <td>{formatFileSize(file.size)}</td>
                    <td>
                      <span className={`badge ${file.status === "uploaded" ? "badge-outline" : "badge-secondary"}`}>
                        {file.status}
                      </span>
                    </td>
                    <td>{file.uploadedAt ? new Date(file.uploadedAt).toLocaleString() : "-"}</td>
                    <td style={{ textAlign: "right" }}>
                      <button
                        style={{
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "4px",
                        }}
                        onClick={() => removeFile(file.id)}
                      >
                        <X size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  )
}
