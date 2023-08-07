import React from 'react';
import ProblemCard from './ProblemCard';
import ProblemList from './data/ProblemList';


const Problems = ()=>{
  return (
    <>
        <div className='my-5'>
            <h1 className='text-center' style={headColor}>Problems</h1>
        </div>
        <div className='container-fluid mb-5'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='row gy-5'>
                       {    
                            ProblemList.map((val, ind)=>{
                                return <ProblemCard
                                    title={val.title}
                                    about={val.about}
                                    addr={val.addr}
                                    imgsrc={val.imgsrc}
                                />
                            })
                       }
                    </div>
                </div>
            </div>

        </div>
        {/* <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <ProblemCard/>
                    <ProblemCard/>
                     <ProblemCard/>
                    
                </div>
            </div>
       </div> */}
    </>
  );
}
const headColor = {
    backgroundColor: '#101010 !important'
}
export default Problems;
