import React from 'react';
import "./Assets/CSS/Details.css"

const Details = () => {
  return (
    <>
        <div className='detail_box'>
            <div className='detail_container'>
                <div className='detail_content'>
                    <span>Custom</span>
                    <h1>Training</h1>
                    <h1>Program</h1>
                </div>
                <div className='detail_grid'>   
                      <div class="container grid_container">
                          <div class="row">
                              <div class="col-sm cont">
                                <div className='g1 icon'>
                                    <i class="fa-solid fa-dumbbell"></i>
                                    <div>Workout Plan</div>
                                </div>
                                
                              </div>
                              <div class="col-sm cont">
                                <div className='g2 icon'>
                                    <i class="fa-solid fa-bowl-food"></i>
                                    <div>Diet Plan</div>
                                </div>
                              </div>
                              
                          </div>
                          <div className='row'>
                            <div className='col-sm cont'>
                                <div className='icon'>
                                <i class="fa-solid fa-stopwatch"></i>
                                <div>Track Growth</div>
                                </div>
                            </div>
                            <div className='col-sm cont'>
                                <div className='icon'>
                                    <i class="fa-solid fa-phone"></i>
                                    <div>Support</div>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
            </div>
        </div>
    </>
  )
}

export default Details