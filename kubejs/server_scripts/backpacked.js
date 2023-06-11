ServerEvents.recipes(
    event => {
        event.shaped(
            'backpacked:backpack',
            ['LLL', 'SIS', 'LLL'],
            {
                L: '#forge:leather',
                S: '#forge:string',
                I: '#forge:ingots/iron',
            }
        )
    }
)