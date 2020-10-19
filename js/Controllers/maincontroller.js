app.controller('MainController', ['$scope', function($scope) {
    $scope.movies = [
      {
        pic: 'img/sinister.jpg',
        title: 'Sinister',
        release: new Date(2013, 00, 00),
        description: 'Looking for inspiration for his next novel, a true crime writer moves into the home of a murdered family. After finding a box of snuff films in the attic, the mystery becomes much darker and he soon realizes there may be no going back.',
        platforms: 'Amazon Prime'
      },
      {
        pic: 'img/insidious.jpg',
        title: 'Insidious',
        release: new Date(2010, 00, 00),
        description: 'After a family\'s young son falls into a coma, they call upon an expert to help. They discover his unique ability to astral project and realize his return will be much more challenging then they can imagine.',
        platforms: 'Amazon Prime, Sling'
      },
      {
        pic: 'img/theconjuring.jpg',
        title: 'The Conjuring',
        release: new Date(2013, 00, 00),
        description: 'A family moves into their dream house, but not long after they begin to experience actions of a malevolent spirit. They call upon the Warrens to help before a deadly posession takes over.',
        platforms: 'Amazon Prime, Sling'
      },
      {
        pic: 'img/paranormalactivity3.jpg',
        title: 'Paranormal Activity 3',
        release: new Date(2011, 00, 00),
        description: 'This third installment goes into the history of the hauntings and we discover that the horror has been a part of the family for a long time.',
        platforms: 'Hulu, Amazon Prime, Sling'
      },
      {
        pic: 'img/annabellecreation.jpg',
        title: 'Annabelle Creation',
        release: new Date(2017, 00, 00),
        description: 'When their daughter is tragically lost, they accidentelly let in a malevolent spirit believing it to be their lost little girl.',
        platforms: 'Amazon Prime, Vudu, YouTube'
      },
      {
        pic: 'img/rec.jpg',
        title: 'REC',
        release: new Date(2007, 00, 00),
        description: 'A terrifying and realistic zombie movie, shot in Spanish with English subtitles.',
        platforms: 'YouTube, Sling, Vudu'
      },
      {
        pic: 'img/us.jpg',
        title: 'Us',
        release: new Date(2019, 00, 00),
        description: 'Adelaide is haunted by a traumatic past experience. When she and her family return to the same spot, she begins to feel like something bad is about to happen, and it does when her family is suddenly attacked by a family that looks exactly like them.',
        platforms: 'Hulu, Amazon Prime, HBO'
      },
      {
        pic: 'img/insidiouschapter2.jpg',
        title: 'Insidious 2',
        release: new Date(2013, 00, 00),
        description: 'Starting from where the first movie left off, the family gets their young son back, only to find out the father has been possessed in the process.',
        platforms: 'Amazon Prime, Sling'
      },
      {
        pic: 'img/thering.jpg',
        title: 'The Ring',
        release: new Date(2002, 00, 00),
        description: 'Believing the video to be an urban legend, a news reporter dismisses it as a hoax, until a group of teenagers die. She watches the video herself and realizes solving it could mean life or death.',
        platforms: 'Amazon Prime'
      },
      {
        pic: 'img/midsommar.jpg',
        title: 'Midsommar',
        release: new Date(2019, 00, 00),
        description: 'A group of friends are invited to a summer festival in Sweden, but soon realize the trip may not be what they thought as they discover they are amongst a cult.',
        platforms: 'Vudo, YouTube'
      },
      
    ];
}]);