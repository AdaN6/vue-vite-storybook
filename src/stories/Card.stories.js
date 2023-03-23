import Card from "../components/Card.vue";

export default {
    title: "Card",
    component: Card,
    argTypes: {
        title: 'String',
        subText: 'String',
        mediaHref: 'String',
        supportingText: 'String',
        buttonText: 'String'
    }
};

// const Template = (args) => ({
//     components: {Card},
//     setup() {
//         return {args};
//     },
//     template: '<Card v-bind="args"/>',

// })

const Template = (args) => ({
    components: { Card },
    setup() {
     return { args };
    },
    template: '<Card v-bind="args"/>',

})

// export const Primary = Template.bind({});

export const Primary = Template.bind({});
Primary.args={
    title: 'Primary',
    subText: 'Hey'
}

export const Secondary = Template.bind({})
Secondary.args= {
    title: 'Secondary',
    subText: 'Media Text',
    mediaHref: 'favicon.ico',
   
}
export const Third = Template.bind({})
Third.args= {
    title: 'Secondary',
    subText: 'Media Text',
    mediaHref: 'placeholder.svg',
    supportingText:'MORE DESCRIPTION MORE MORE MROE'
}
export const ForthWithButton = Template.bind({})
ForthWithButton.args= {
    title: 'Secondary',
    subText: 'Media Text',
    mediaHref: 'placeholder.svg',
    supportingText:'MORE DESCRIPTION MORE MORE MROE',
    buttonText: 'go'
}
