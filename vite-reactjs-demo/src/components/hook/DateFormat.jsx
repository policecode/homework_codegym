function DateFormat(props) {
    // eslint-disable-next-line react/prop-types
    const {date} = props;
    let formatDate = (date) => {
        return ( `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
      }
    return (
      <>
        {formatDate(new Date(date))}
      </>
    )
  }
  <style>
  
  </style>
  export default DateFormat
  