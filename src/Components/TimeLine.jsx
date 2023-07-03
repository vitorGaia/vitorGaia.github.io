import '../Styles/TimeLine.css';

function TimeLine() {
  return (
    <div className='time-line-container'>
        <div className="container left">
          <div className="content">
            <h2><i className='bx bx-calendar'></i> Jan - 2022</h2>
            <p>Unifatecie</p>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2><i className='bx bx-calendar'></i> Nov - 2022</h2>
            <p>Trybe</p>
          </div>
        </div>
      </div>
  );
}

export default TimeLine;