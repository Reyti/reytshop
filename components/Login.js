import styled from "styled-components"

export default function Login() {

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 1000px;
    margin: auto;
`;   

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding-top: 1.5rem;
    padding-top: 0px;
    background-color: rgb(249 250 251);
    @media (min-width: 640px) {
        justify-content: center;
        padding-top: 0px;
    }
`;

const Logo = styled.h3`
    font-size: 2.25rem;
    line-height: 2.5rem; 
    font-weight: 700;
    color: black;
`;

const FormContainer = styled.div`
    width: 100%;
    padding-left: 1.5rem; 
    padding-right: 1.5rem; 
    margin-top: 1.5rem;
    overflow: hidden;
    background-color: rgb(255 255 255);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    @media (min-width: 640px) {
        max-width: 25rem;
        border-radius: 0.5rem; 
    }
`;

const Label = styled.label`
    display: block;
    font-size: 0.875rem; 
    line-height: 1.25rem; 
    font-weight: 500;
    color: black;
`;

const EachInput = styled.div`
    margin-top: 1rem;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

const Input = styled.input`
    display: block;
    width: 99%;
    margin-top: 0.25rem;
    padding-top: 0.35rem;
    padding-bottom: 0.35rem;
    border-radius: 0.375rem;
    border: 1px solid grey;
    margin-right: 0;
    padding-right: 0;
    &:focus {
        border-color: rgb(165 180 252);
        box-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        --tw-ring-opacity: 0.5;
    }
`;

const ForgetPassword = styled.a`
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(147 51 234);
    text-decoration: none;
    &:hover {
        text-decoration-line: underline;
    }
`;

const Register = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const LoginWrapper = styled.div`
    margin-top: 1rem;
    color: black;
`;

const RegisterButton = styled.button`
    width: 100%;
    padding-top: 0.5rem; 
    padding-bottom: 0.5rem; 
    padding-left: 1rem; 
    padding-right: 1rem;
    letter-spacing: 0.035em;
    font-size: 0.9rem; 
    border: solid 1px grey;
    color: rgb(255 255 255);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 200ms;
    --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: 0;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    background-color: rgb(126 34 206);
    border-radius: 0.375rem;
    cursor: pointer;
    &:hover {
        background-color: rgb(147 51 234);
    }
    &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
        background-color: rgb(147 51 234);
    }
`;

const LoginButton = styled.a`
    color: rgb(147 51 234);
    text-decoration: none;
    &:hover {
        text-decoration-line: underline;
    }
`; 

const LinesWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1rem; 
    margin-bottom: 1rem; 
`;

const Line = styled.hr`
    width: 100%;    
`;

const OR = styled.p`
    padding-left: 0.75rem; 
    padding-right: 0.75rem; 
`;

const LinksWrapper = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem; 
`;

const LinkButton = styled.button`
    font-family: 'Poppins',sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: none;
    border: solid 0.2rem grey;
    margin-bottom: 0.5rem;
    width: 100%;
    border-width: 1px;
    border-radius: 0.375rem;
    cursor: pointer;
    &:focus {
        box-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
        --tw-ring-offset-width: 1px;
        box-shadow: 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow);
        --tw-ring-color: rgb(167 139 250);
    } 
`;

const Img = styled.img`
    width: 1.5rem;
    heigh: 1.5rem;
    fill: currentColor;
`;

    return (       
        <Container>
            <div>
                <Logo>
                    Reytshop
                </Logo>
            </div>
            <FormContainer>
                <form>
                    <EachInput>
                        <Label htmlFor="name">
                            Name
                        </Label>
                        <InputWrapper>
                            <Input type="name" name="name"/>
                        </InputWrapper>
                    </EachInput>
                    <EachInput>
                        <Label htmlFor="email">
                            Email
                        </Label>
                        <InputWrapper>
                            <Input type="email" name="email"/>
                        </InputWrapper>
                    </EachInput>
                    <EachInput>
                        <Label htmlFor="password">
                            Password
                        </Label>
                        <InputWrapper>
                            <Input type="password" name="password"/>
                        </InputWrapper>
                    </EachInput>
                    <ForgetPassword href="#">
                        Forget Password?
                    </ForgetPassword>
                    <Register>
                        <RegisterButton>
                            Register
                        </RegisterButton>
                    </Register>
                </form>
                <LoginWrapper>
                    Already have an account?{" "}
                    <span>
                        <LoginButton href="#">
                            Log in
                        </LoginButton>
                    </span>
                </LoginWrapper>
                <LinesWrapper>
                    <Line/>
                    <OR>OR</OR>
                    <Line/>
                </LinesWrapper>
                <LinksWrapper>
                    <LinkButton aria-label="Login with Google" type="button">
                        <Img src="/images/google-icon2.svg"/>
                        <p>Login with Google</p>
                    </LinkButton>
                    <LinkButton aria-label="Login with GitHub" role="button">
                        <Img src="/images/github-icon.svg"/>
                        <p>Login with GitHub</p>
                    </LinkButton>
                </LinksWrapper>
            </FormContainer>
        </Container>
    )
}