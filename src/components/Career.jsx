import { useState } from "react";
import { DialogTitle, DialogContent, DialogActions, Button, TextField, Box, Typography } from "@mui/material";
import { CloudUpload, Delete } from "@mui/icons-material";
import axios from "axios";

const JobApplicationForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    subject: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [filePreview, setFilePreview] = useState(null);

  // Validation rules
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Only letters are allowed";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.position.trim()) {
      newErrors.position = "Position is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!formData.file) {
      newErrors.file = "Resume file is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user types
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file });
      setFilePreview(URL.createObjectURL(file));
      setErrors({ ...errors, file: "" });
    }
  };

  // Handle drag & drop
  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData({ ...formData, file });
      setFilePreview(URL.createObjectURL(file));
      setErrors({ ...errors, file: "" });
    }
  };

  // Prevent default behavior for drag events
  const handleDragOver = (e) => e.preventDefault();

  // Handle API Call
  const handleSubmit = async () => {
    if (!validateForm()) return;

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("position", formData.position);
    form.append("subject", formData.subject);
    form.append("message", formData.message);
    form.append("resume", formData.file);

    try {
      const response = await axios.post("https://your-api-endpoint.com/upload", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Success:", response.data);
      alert("Application submitted successfully!");
      handleClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <>
      <DialogTitle style={{ color: "#007bff", fontWeight: "bold" }}>
        <h3>Job Application</h3>
      </DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          name="name"
          label="Your Name"
          margin="dense"
          required
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
        />
        <TextField
          fullWidth
          name="email"
          label="Your Email"
          type="email"
          margin="dense"
          required
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <TextField
          fullWidth
          name="phone"
          label="Your Mobile Number"
          type="text"
          margin="dense"
          required
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <TextField
          fullWidth
          name="position"
          label="Position Apply For / Query / Training"
          margin="dense"
          required
          onChange={handleChange}
          error={!!errors.position}
          helperText={errors.position}
        />
        <TextField
          fullWidth
          name="subject"
          label="Subject (Optional)"
          margin="dense"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          name="message"
          label="Message"
          margin="dense"
          required
          multiline
          rows={4}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
        />

        {/* Drag & Drop File Upload */}
        <Box
          sx={{
            border: "2px dashed #ccc",
            padding: 3,
            textAlign: "center",
            cursor: "pointer",
            marginTop: 2,
            position: "relative",
            borderRadius: "10px",
            "&:hover": { borderColor: "#000" },
          }}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {filePreview ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p>{formData.file.name}</p>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Delete />}
                onClick={() => {
                  setFormData({ ...formData, file: null });
                  setFilePreview(null);
                }}
              >
                Remove
              </Button>
            </div>
          ) : (
            <>
              <CloudUpload fontSize="large" />
              <p>Drag & Drop your resume here or click to upload</p>
            </>
          )}
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              opacity: 0,
              cursor: "pointer",
            }}
            onChange={handleFileChange}
          />
        </Box>
        {errors.file && <Typography color="error">{errors.file}</Typography>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Close
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!formData.name || !formData.email || !formData.phone || !formData.position || !formData.message || !formData.file}
        >
          Apply
        </Button>
      </DialogActions>
    </>
  );
};

export default JobApplicationForm;
