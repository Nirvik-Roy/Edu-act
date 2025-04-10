import React from 'react'
import team from '../../assets/images/team/team-2-1.jpg'
import team2 from '../../assets/images/team/team-2-2.jpg'
import team3 from '../../assets/images/team/team-2-3.jpg'
const OurTeam = () => {
  return (
    <>
      <div className='our_team_wrapper'>
      <h2 className='arrow_head_text' style={{
        textAlign:'center'
      }}>Our Team <svg class="arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 13">
                                        <g clip-path="url(#clip0_324_36194)">
                                            <path d="M10.5406 6.49995L0.700562 12.1799V8.56995L4.29056 6.49995L0.700562 4.42995V0.819946L10.5406 6.49995Z"></path>
                                            <path d="M25.1706 6.49995L15.3306 12.1799V8.56995L18.9206 6.49995L15.3306 4.42995V0.819946L25.1706 6.49995Z"></path>
                                            <path d="M39.7906 6.49995L29.9506 12.1799V8.56995L33.5406 6.49995L29.9506 4.42995V0.819946L39.7906 6.49995Z"></path>
                                            <path d="M54.4206 6.49995L44.5806 12.1799V8.56995L48.1706 6.49995L44.5806 4.42995V0.819946L54.4206 6.49995Z"></path>
                                        </g>
                                    </svg></h2>
                                    <h1>Meet Our Professional Team <br/>
                                    Members</h1>

                                    <div className='team_wrapper universal_container'>
                                        <div className='team_div'>
                                            <img src={team}/>
                                        </div>
                                        <div className='team_div'>
                                            <img src={team2}/>
                                        </div>
                                        <div className='team_div'>
                                            <img src={team3}/>
                                        </div>
                                    </div>
      </div>
    </>
  )
}

export default OurTeam
