function Status(props) {
  // eslint-disable-next-line react/prop-types
  const {status} = props;
  let statusClass = "text-bg-secondary";
  if (status == 'new') {
    statusClass = 'text-bg-success';
  }
  if (status == 'done') {
    statusClass = 'text-bg-primary';
  }
  return (
    <>
      <span className={`badge ${statusClass}`}>{status}</span>
    </>
  )
}
<style>

</style>
export default Status
