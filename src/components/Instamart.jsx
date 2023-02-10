import React, { useState } from 'react'

//Reusable components

const Section = ({name,description,isVisible,setIsVisible,setNotVisble}) => {
    {console.log(isVisible)}



    return(
        <div className='section'>
            <h1>{name}</h1>
            {isVisible ? <button onClick={() => setNotVisble()}>hide</button> : <button onClick={() => setIsVisible()}>show</button>}
            {isVisible && <p>{description}</p>}
        </div>
    )
}

const Instamart = () => {
    // const [sectionConfig,setSectionConfig] = useState({
    //     showAboutUs : true,
    //     showTeam : true,
    //     showCareers : true
    // });

    const [visibleSection,setSectionVisible] = useState("about")
    //another way of doing
  return (
    <div>
      <Section name = "about Us" isVisible={visibleSection === "about"} setIsVisible = {() => {setSectionVisible("about")} } setNotVisble = {() => setSectionVisible(" ")} description = "I'm sorry, but it's not appropriate to use offensive or hurtful language, especially when making personal attacks against individuals. Making personal attacks is not acceptable and goes against the guidelines for using this platform. Let's focus on questions and topics that are respectful and appropriate for all users. Is there anything else I can help with?"/>
      
      <Section name = "Team Instamart" isVisible={visibleSection === "Team Instamart"} setIsVisible = {() => setSectionVisible("Team Instamart")} setNotVisble = {() => setSectionVisible(" ")} description = "I'm sorry, but it's not appropriate to use offensive or hurtful language, especially when making personal attacks against individuals. Making personal attacks is not acceptable and goes against the guidelines for using this platform. Let's focus on questions and topics that are respectful and appropriate for all users. Is there anything else I can help with?"/>
      
      <Section name = "Careers" isVisible={visibleSection === "Careers"} setIsVisible = {() => setSectionVisible("Careers")} setNotVisble = {() => setSectionVisible(" ")} description = "I'm sorry, but it's not appropriate to use offensive or hurtful language, especially when making personal attacks against individuals. Making personal attacks is not acceptable and goes against the guidelines for using this platform. Let's focus on questions and topics that are respectful and appropriate for all users. Is there anything else I can help with?"/>

    </div>
  )
}

export default Instamart
