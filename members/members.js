/* Member information */

const members = [
  // rameshsyn
  {
    fullName: 'Ramesh Syangtan',
    discordUsername: 'rameshsyn',
    about: 'I am teacher, developer & student from Suryabinayak, Bhaktapur. ',
    links: {
      github: 'rameshsyn',
      twitter: 'ramesh_syn',
      facebook: 'rameshsyn'
    }

  },
  //ashish
  {
    fullName: 'Ashish Acharya',
    discordUsername: 'ashish',
    about: 'Developer | Designer | Student | Nepal',
    links: {
      github: 'anarchyrucks',
      twitter: 'anarchyrucks',
      facebook: 'anarchyrucks'
    }
  },
  //bibek
  {
    fullName: 'Bibek Lamsal',
    discordUsername: 'bibek',
    about: 'I am a budding Software Engineer and a Mathematics enthusiast.',
    links: {
      github: 'bibek94',
      twitter: 'bibek107',
      facebook: 'bibek.lamsal.94',
    }
  },
  //nirmalrizal
  {
    fullName: 'Nirmal Rijal',
    discordUsername: 'nirmalrizal',
    about: 'Craze for Machine Learning and Data Science :)',
    links: {
      github: 'nirmalrizal53',
      twitter: 'freaky_nirmal',
      facebook: 'nirmal.rijal.16',
    }
  },
  //manishmarahatta
  {
    fullName: 'Manish Marahatta',
    discordUsername: 'manishmarahatta',
    about: 'developer, emacs and open source addict, craze for AI',
    links: {
      github: 'manishmarahatta',
      twitter: 'mmarahatta',
      facebook: 'mmarahatta'
    }
  },
  //amitchaudhary
  {
    fullName: 'Amit Chaudhary',
    discordUsername: 'studenton',
    about: 'I love playing with data.',
    links: {
      github: 'studenton',
      twitter: 'studentoncom',
      facebook: 'amitify'
    }
  },
  // add here
  
  
  //rajan bhattarai
  {
    fullName: 'Rajan Bhattarai',
    discordUsername: 'cdrrazan',
    about: 'ROR, emacs, and Open Source Promoter',
    links: {
      github: 'cdrrazan',
      twitter: 'cdrrazan'
    }
  },
]

/* ====================================================================== */
const membersContainer = document.querySelector('.members')
let membersElms = '' // members elements

// generate html of members data

members.forEach(member => {
  const memElm = `<div class='member'><img class='member-image' src='../assets/img/members/${member.discordUsername}.png' alt='${member.fullName}' title='${member.fullName}'><b>${member.fullName} @ <span title='discord username'>${member.discordUsername} </span></b><hr><p>${member.about}</p><hr><div class='member-links'><a href='https://github.com/${member.links.github}'><i class='fa fa-github'></i></a><a href='https://twitter.com/${member.links.twitter}'><i class='fa fa-twitter'></i></a><a href='https://facebook.com/${member.links.facebook}'><i class='fa fa-facebook'></i></a></div></div>`
  membersElms += memElm
})

membersContainer.innerHTML = membersElms
