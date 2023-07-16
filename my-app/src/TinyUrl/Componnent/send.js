//כשלוחצים על משהו אז מציג למטה בצד שמאל לדוג ההודעה נשלחה בהצלחה
//snackbar
export default function SimpleSnackbar() {
 

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Send to your mail"
        action={action}
      />
    </div>
  );
}