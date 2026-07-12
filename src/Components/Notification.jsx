function Notification({  hasNewMessage }) {
  return (
    <div>
      
        {hasNewMessage && <p>You have new messages!</p>}
    </div>
  );
}

export default Notification;
