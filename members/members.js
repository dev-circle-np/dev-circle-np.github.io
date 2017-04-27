/* Member information */

const members = [
  // rameshsyn
  {
    fullName: 'Ramesh Syangtan',
    discordUsername: 'rameshsyn#6074',
    about: 'I am teacher, developer & student from Suryabinayak, Bhaktapur. ',
    links: {
      github: 'rameshsyn',
      twitter: 'ramesh_syn',
      facebook: 'rameshsyn'
    }
  },
  // ashish
  {
    fullName: 'Ashish Acharya',
    discordUsername: 'ashish#2010',
    about: 'Developer | Designer | Student | Nepal',
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
    links: {
      github: 'bibek94',
      twitter: 'bibek107',
      facebook: 'bibek.lamsal.94'
    }
  },
  // nirmalrizal
  {
    fullName: 'Nirmal Rijal',
    discordUsername: 'nirmalrizal#8173',
    about: 'Craze for Machine Learning and Data Science :)',
    links: {
      github: 'nirmalrizal53',
      twitter: 'nirmalrizal',
      facebook: 'nirmal.rijal.16'
    }
  },
  // manishmarahatta
  {
    fullName: 'Manish Marahatta',
    discordUsername: 'manishmarahatta#6214',
    about: 'developer, emacs and open source addict, craze for AI',
    links: {
      github: 'manishmarahatta',
      twitter: 'mmarahatta',
      facebook: 'mmarahatta'
    }
  },
  // nabinsademba
  {
    fullName: 'Nabin Sademba',
    discordUsername: 'Monk34#5561',
    about: 'nerd,geek :P',
    links: {
      github: 'nabins13',
      twitter: 'nabin sademba',
      facebook: 'नविन सादेम्बा लिम्बु'
    }
  },
  // amitchaudhary
  {
    fullName: 'Amit Chaudhary',
    discordUsername: 'amitness#3292',
    about: 'I love playing with data.',
    links: {
      github: 'studenton',
      twitter: 'studentoncom',
      facebook: 'amitify'
    }
  },
  // rajan bhattarai
  {
    fullName: 'Rajan Bhattarai',
    discordUsername: 'cdrrazan#3388',
    about: 'ROR, emacs, and Open Source Promoter',
    links: {
      github: 'cdrrazan',
      twitter: 'cdrrazan',
      facebook: 'cdrrazanme'
    }
  },
  // Animesh Risal
  {
    fullName: 'Animesh Risal',
    discordUsername: 'TenToasts#8794',
    about: 'Machine Learning, NLP, open education',
    links: {
      github: 'toastypixels',
      twitter: 'TenToasts',
      facebook: 'TenToasts'
    }
  },
  // Sabin Nepal
  {
    fullName: 'Sabin Nepal',
    discordUsername: 'neymarsabin#2179',
    about: 'I am a CSIT student and I like to collaborate.',
    links: {
      github: 'neymarsabin'
    }
  },
  // Pradip Khadka
  {
    fullName: 'Pradip Khadka',
    discordUsername: 'pradyp.me#2193',
    about: 'Developer, EDM Lover, Lifelong Learner',
    links: {
      github: 'coderpradp',
      twitter: 'pradpkhadka',
      facebook: 'iampradp'
    }
  },
  // Pratik Chaudhary
  {
    fullName: 'Pratik Chaudhary',
    discordUsername: 'AbsoluteZero#0296',
    about: 'Hacks FP',
    links: {
      github: 'AbsoluteZero273',
      twitter: 'CodeZero273'
    }
  }
  // add here
]
/* ====================================================================== */
const membersContainer = document.querySelector('.members')
let membersElms = '' // members elements

// Generate html of members data

members.forEach(member => {
  let memElm =
    `<div class='member'>
      <img class='member-image'
        src='https://github.com/${member.links.github}.png?size=100',
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
