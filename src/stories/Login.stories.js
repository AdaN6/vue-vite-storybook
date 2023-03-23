import {screen, userEvent} from '@storybook/testing-library'
import Login from "../components/Login.vue"

export default {
    title: "Login",
    component: Login,
}

const Template = (args) => ({
    components: { Login },
    setup() {
      return { args };
    },
    template: '<Login v-bind="args"/>',
  });
  
  export const Primary = Template.bind({});
  
  Primary.play = async() => {
    const passwordInput = screen.getByLabelText('password', {
        selector: 'input'
    })
    
    const emailInput = screen.getByLabelText('email', {
        selector: 'input'
    })
    
    const submitBtn = screen.getByRole('button', {
        selector: 'button'
    })

    await userEvent.type(emailInput, 'text@dada.com', {
        delay: 200
    })

    await userEvent.type(passwordInput, 'Example', {
        delay: 200
    })
    
    await userEvent.click(submitBtn)
  };
