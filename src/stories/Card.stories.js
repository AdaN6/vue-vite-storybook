import Card from "../components/Card.vue";

export default {
    title: "Card",
    component: Card,
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
    mediaHref: 'favicon.co'
}
