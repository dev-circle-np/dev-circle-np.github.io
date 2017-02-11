/* Member information */

const members = [
  // rameshsyn
  {
    fullName: 'Ramesh Syangtan',
    dicordUsername: 'rameshsyn',
    about: 'I am teacher, developer & student from suryabinayak, Bhaktapur. ',
    links: {
      github: 'rameshsyn',
      twitter: 'ramesh_syn',
      facebook: 'rameshsyn'
    }

  }, 
  
  // add here
]

/* ====================================================================== */
const membersContainer = document.querySelector('.members')
let membersElms = '' // members elements

// generate html of members data

members.forEach(member => {
  const memElm = `<div class='member'><img class='member-image' src='../assets/img/members/${member.dicordUsername}.png' alt='${member.fullName}' title='${member.fullName}'><b>${member.fullName} @ <span title='discord username'>${member.dicordUsername} </span></b><hr><p>${member.about}</p><hr><div class='member-links'><a href='https://github.com/${member.links.github}'><i class='fa fa-github'></i></a><a href='https://twitter.com/${member.links.twitter}'><i class='fa fa-twitter'></i></a><a href='https://facebook.com/${member.links.facebook}'><i class='fa fa-facebook'></i></a></div></div>`
  membersElms += memElm
})

membersContainer.innerHTML = membersElms
