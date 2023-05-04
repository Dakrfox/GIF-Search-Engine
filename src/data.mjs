const data = [
    {
        id: 1,
        name: 'Reaction',
        link: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjA0ZTgzNjBkMDIxY2JjMDdhYWE5ZDkzZDA0YTM2YzBhNmY2Yjg0ZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/yhUKWLaleTfavmxr85/giphy.gif',
        keywords: ['screaming', 'funny'],
        status: true
    },
    {
        id: 2,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/iD6UMP94gbOYnSzHkH/giphy.gif',
        keywords: ['justice', 'serious'],
        status: true
    },

    {
        id: 3,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/24zteuy2Lu7cskRZjQ/giphy.gif',
        keywords: ['crying', 'sad'],
        status: true
    },
    {
        id: 4,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/l4pT2pfPiEBHmJ8Bi/giphy.gif',
        keywords: ['winner', 'succesful'],
        status: true
    },
    {
        id: 5,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/VqLEfoBnnFHaPlXXDA/giphy.gif',
        keywords: ['justice', 'world'],
        status: true
    },
    {
        id: 6,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/rBZGrXM58keWfIq9hJ/giphy.gif',
        keywords: ['justice', 'virus', 'asian'],
        status: true
    },
    {
        id: 7,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmMzYTNiZTk0YWZmZjU2Mzc1OTI4NzAzNWMyOWYyZGYwYjRjMGE1MiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/NJIcTtUEnbWQtbkDfx/giphy.gif',
        keywords: ['dog', 'cute'],
        status: true
    },
    {
        id: 8,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/00xGP4zv8xENZ2tc3Y/giphy.gif',
        keywords: ['surprising', 'funny'],
        status: true
    },
    {
        id: 9,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQ0YWExNDRhNjBmYzhkNWZmNGY2NGNkOWQwNDJhMTNiMzZmZmQ0OSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/g46Cah1Ob30X9LGBk9/giphy.gif',
        keywords: ['dog', 'cute'],
        status: true
    },

    {
        id: 10,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjdiZWZlOWQ1ZTA2OTJkMDg5Yjg5MmNkNzViNDUxZDA2YjYwNzE1NCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/hfh9amCOiYzo4vTV6G/giphy.gif',
        keywords: ['mouse', 'jail'],
        status: true
    },
    {
        id: 11,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWEyMDM2ZTBlMzAwNjllNzdkZTJkZmI2ZWMyZDhlNTI5NDAwMmY0NiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/cnnzb1Z1qJd04LvnCZ/giphy.gif',
        keywords: ['rain', 'happy'],
        status: true
    },
    {
        id: 12,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTI5MzkyNTEzMTIzODM2M2I4ZTAxMDUzMGZmMmQ2ODJhNDM4MDViZCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/4yZjTd4PP3mLL18RaD/giphy.gif',
        keywords: ['rock', 'barbie'],
        status: true
    },
    {
        id: 13,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2Q3ODg5ZGM2OTVhNzk1YmUzNTI2NGU1YTk1NjAzYjk0NDNiYTQ4ZSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/gigtMHmzNP2qJyFexH/giphy.gif',
        keywords: ['inspirational', 'branding'],
        status: true
    },
    {
        id: 14,
        name: 'Product 2',
        link: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGIyZDM0NGRkOWYzN2FmNjA2M2ZkNWJlNTY4NjU2MjYyZWRiMmI0MSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/tkUvGwASt6bzI7yjma/giphy.gif',
        keywords: ['welcome'],
        status: true
    },
    {
        id: 20,
        name: 'Product 1',
        link: 'https://media.tenor.com/I4lnUTdb9ikAAAAd/gwen-stacy.gif',
        keywords: ['funny', 'dog'],
        status: true
    },
    {
        id: 21,
        name: 'Product 2',
        link: 'https://media.tenor.com/MmjEo1QitoAAAAAC/little-anime.gif',
        keywords: ['excited', 'happy'],
        status: true
    },
    {
        id: 22,
        name: 'Product 3',
        link: 'https://media.tenor.com/pZvAapm9dVYAAAAC/just-a-little-bit-curtis-james-jackson-iii.gif',
        keywords: ['sad', 'crying'],
        status: true
    },
    {
        id: 23,
        name: 'Product 4',
        link: 'https://media.tenor.com/ZOu-iEaHrTwAAAAC/camila-cabello-just-a-little-bit.gif',
        keywords: ['thumbs up', 'good job'],
        status: true
    },
    {
        id: 24,
        name: 'Product 5',
        link: 'https://media.tenor.com/qfJxjedvYksAAAAd/camilacabello-camila.gif',
        keywords: ['hello', 'greeting'],
        status: true
    },
    {
        id: 25,
        name: 'Product 6',
        link: 'https://media.tenor.com/-y3U9L90aoMAAAAC/camila-cabello.gif',
        keywords: ['shocked', 'surprised'],
        status: true
    },
    {
        id: 26,
        name: 'Product 7',
        link: 'https://media.tenor.com/7UQBJ7B7I6QAAAAC/encantoencantoencanto.gif',
        keywords: ['angry', 'frustrated'],
        status: true
    },
    {
        id: 27,
        name: 'Product 8',
        link: 'https://media.tenor.com/58c8Wu83HfMAAAAC/encanto-encanto-disney.gif',
        keywords: ['love', 'heart'],
        status: true
    },
    {
        id: 28,
        name: 'Product 9',
        link: 'https://media.tenor.com/lZhsey12dsgAAAAC/spongebob-with-magical-charms.gif',
        keywords: ['laugh', 'hilarious'],
        status: true
    },
    {
        id: 29,
        name: 'Product 10',
        link: 'https://media.tenor.com/Udm71kS2CZoAAAAC/fresh-look-spongebob.gif',
        keywords: ['wink', 'flirty'],
        status: true
    },
    {
        id: 30,
        name: 'Product 11',
        link: 'https://media.tenor.com/Ib8EpecBhPYAAAAC/fresh-face-clean-face.gif',
        keywords: ['bye', 'goodbye'],
        status: true
    },
    {
        id: 31,
        name: 'Product 12',
        link: 'https://media.tenor.com/YA1bMo_h0lAAAAAC/the-emperors-new-groove-kuzco.gif',
        keywords: ['oops', 'mistake'],
        status: true
    },
    {
        id: 32,
        name: 'Product 13',
        link: 'https://media.tenor.com/S8xNCTS84RIAAAAC/the-emperors-new-groove-raining.gif',
        keywords: ['applause', 'clapping'],
        status: true
    },
    {
        id: 33,
        name: 'Product 14',
        link: 'https://media.tenor.com/DzShgCfCFf8AAAAd/none-whatsoever-no.gif',
        keywords: ['thank you', 'thanks'],
        status: true
    },
    {
        id: 34,
        name: 'Product 15',
        link: 'https://media.tenor.com/QCqXEjpkUpgAAAAC/zero-nothing.gif',
        keywords: ['excited', 'happy'],
        status: true
    }

];

export default data;