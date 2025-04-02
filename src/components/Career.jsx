import { DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem } from "@mui/material";

const JobApplicationForm = ({ handleClose }) => {
  return (
    <>
      <DialogTitle>Job Application</DialogTitle>
      <DialogContent>
        <TextField fullWidth label="Your Name" margin="dense" required />
        <TextField fullWidth label="Your Email" type="email" margin="dense" required />
        <TextField fullWidth label="Your Phone Number" type="tel" margin="dense" required />

        <TextField fullWidth select label="Position Applying For" margin="dense">
          <MenuItem value="Software Engineer">Software Engineer</MenuItem>
          <MenuItem value="Project Manager">Project Manager</MenuItem>
          <MenuItem value="UI/UX Designer">UI/UX Designer</MenuItem>
        </TextField>

        <TextField fullWidth multiline rows={4} label="Your Message" margin="dense" />

        <input type="file" style={{ marginTop: 10 }} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Close
        </Button>
        <Button variant="contained" color="primary">
          Apply
        </Button>
      </DialogActions>
    </>
  );
};

export default JobApplicationForm;
