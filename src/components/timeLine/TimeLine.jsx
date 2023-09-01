import './styles.css';

function TimeLine() {
  return (
    <div className='time-line-container'>
        <div className="container left">
          <div className="content">
            <h2>Unifatecie</h2>
            <p><i className='bx bx-calendar'></i>2021 - 2026</p>
            <span className='description'>Engenharia de Software</span>
          </div>
        </div>
        <div className="container right">
          <div className="content">
            <h2>Trybe</h2>
            <p><i className='bx bx-calendar'></i>2022 - 2023</p>
            <span className='description'>Desenvolvedor Full stack</span>
          </div>
        </div>
      </div>
  );
}

export default TimeLine;