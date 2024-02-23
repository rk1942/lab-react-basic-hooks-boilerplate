import React,{ useContext } from "react";
import { ToggleTheme } from "../App";
import NewUseState from "./NewUseState";


function UseContext(){
  const para = `[Intro: J. Cole]
  Uh
  
  [Chorus: J. Cole]
  Pride is the Devil
  Think it got a hold on me
  Pride is the Devil
  It left so many R.I.P. 
  Pride is the Devil
  Think it got a hold on me
  Pride is the Devil, yeah, uh
  
  [Post-Chorus: J. Cole]
  Terrified, paranoid, I'll put you over everything to fill the void
  And when you’re gone, will I have anything or will I be destroyed? Uh
  Terrified, paranoid, I'll put you over everything to fill the void
  And when you're gone, will I have anything or will I be destroyed? Yеah
  
  [Verse 1: J. Cole]
  Bright lights pass me in the city, it’s emеrgency
  I'm thankful 'cause I made it past my thirties, no one murdered me
  Still remember vividly the dude that pulled a gun on me
  I'm petrified, but moving like I got no sense of urgency
  Pride make a dude act way harder than he really be
  Pride hide the shame of sin and cut off all utilities
  Pride hide the pain of growing up in hell and poverty
  Pride make a dude feel a way that you unfollow me
  Make a dude flash a thousand like he hit the lottery
  Make a baby mama make shit harder than it gotta be
  Make you have to take the girl to court to see your prodigy
  Make you have to use your last resort and pull a robbery
  Pride be the reason for the family dichotomy
  Got uncles and some aunties that's too proud to give apologies
  Slowly realizing what the root of all my problems be
  It got me feeling different when somebody say they proud of me
  You might also like`

  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme?"black":"grey",
    color:theme?"grey":"black",
    padding:"2rem",
    margin:"2rem"
  }

  return(
    <div style={themeStyle}>
      <NewUseState para={para}/>
    </div>
  )
}

export default UseContext;