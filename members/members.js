/* Member information */

const members = [
  // rameshsyn
  {
    fullName: 'Ramesh Syangtan',
    discordUsername: 'rameshsyn',
    about: 'I am teacher, developer & student from Suryabinayak, Bhaktapur. ',
    image: true,
    links: {
      github: 'rameshsyn',
      twitter: 'ramesh_syn',
      facebook: 'rameshsyn'
    }

  },
  // ashish
  {
    fullName: 'Ashish Acharya',
    discordUsername: 'ashish',
    about: 'Developer | Designer | Student | Nepal',
    image: true,    
    links: {
      github: 'anarchyrucks',
      twitter: 'anarchyrucks',
      facebook: 'anarchyrucks'
    }
  },
  // bibek
  {
    fullName: 'Bibek Lamsal',
    discordUsername: 'bibek',
    about: 'I am a budding Software Engineer and a Mathematics enthusiast.',
    image: true,
    links: {
      github: 'bibek94',
      twitter: 'bibek107',
      facebook: 'bibek.lamsal.94',
    }
  },
  // nirmalrizal
  {
    fullName: 'Nirmal Rijal',
    discordUsername: 'nirmalrizal',
    about: 'Craze for Machine Learning and Data Science :)',
    image: true,
    links: {
      github: 'nirmalrizal53',
      twitter: 'freaky_nirmal',
      facebook: 'nirmal.rijal.16',
    }
  },
  // manishmarahatta
  {
    fullName: 'Manish Marahatta',
    discordUsername: 'manishmarahatta',
    about: 'developer, emacs and open source addict, craze for AI',
    image: true,
    links: {
      github: 'manishmarahatta',
      twitter: 'mmarahatta',
      facebook: 'mmarahatta'
    }
  },
  // nabinsademba
  {
    fullName: 'Nabin Sademba',
    discordUsername: 'Monk34',
    about: 'nerd,geek :P',
    image: false,
    links: {
      github: 'nabins13',
      twitter: 'nabin sademba',
      facebook: 'नविन सादेम्बा लिम्बु'
    }
  },
  // amitchaudhary
  {
    fullName: 'Amit Chaudhary',
    discordUsername: 'studenton',
    about: 'I love playing with data.',
    image: true,
    links: {
      github: 'studenton',
      twitter: 'studentoncom',
      facebook: 'amitify'
    }
  },
  // rajan bhattarai
  {
    fullName: 'Rajan Bhattarai',
    discordUsername: 'cdrrazan',
    about: 'ROR, emacs, and Open Source Promoter',
    image: true,
    links: {
      github: 'cdrrazan',
      twitter: 'cdrrazan',
      facebook: 'cdrrazanme'
    }
  },
  
  // Animesh Risal
   {
    fullName: 'Animesh Risal',
    discordUsername: '!10Toasts',
    about: 'Machine Learning, NLP, open education',
    image: false,
    links: {
      github: 'TenToasts',
      twitter: 'TenToasts',
      facebook: 'TenToasts'
    }
  },
  // Sabin Nepal
  {
    fullName: 'Sabin Nepal',
    discordUsername: 'neymarsabin',
    about: 'I am a CSIT student and I like to collaborate.',
    image: true,
    links: {
      github: 'neymarsabin'
    }
  },
  // add here
]
/* ====================================================================== */
const membersContainer = document.querySelector('.members')
let membersElms = '' // members elements

// generate html of members data

members.forEach(member => {
  const image = member.image ? member.discordUsername : 'default'
  let memElm =
    `<div class='member'>
      <img class='member-image'
        src='../assets/img/members/${image}.png',
        alt='${member.fullName}'
        title='${member.fullName}'>
      <b>${member.fullName} @ <span title='discord username'>${member.discordUsername} </span></b><hr>
      <p>${member.about}</p><hr>
      <div class='member-links'>
    `

  if (member.links.github) {
    memElm += `<a href='https://github.com/${member.links.github}'><i class='fa fa-github'></i></a>`
  }

  if (member.links.twitter) {
    memElm += `<a href='https://twitter.com/${member.links.twitter}'><i class='fa fa-twitter'></i></a>`
  }

  if (member.links.facebook) {
    memElm += `<a href='https://facebook.com/${member.links.facebook}'><i class='fa fa-facebook'></i></a>`
  }

  memElm += `</div></div>`

  membersElms += memElm
})

membersContainer.innerHTML = membersElms
