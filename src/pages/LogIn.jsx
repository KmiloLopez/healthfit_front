import {
    Btn,
    Line1,
    Line2,
    FormLabels,
    BtnLoginContent,
    NoMainBtn,
    NoMainBtnContent,
    LogInRegistrationTittle,
    FormLines,
    Inputboxes,
    ButtonsContainer,
    FormContainer,
} from "../styles/ComponentStyles";

const LogIn = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        const credentials = {
            email: email.value,
            password: password.value,
        };

        if (email.value && password.value) {
          console.log("se hace peticion POST http://localhost:3000/auth/login al backend con las credenciales", credentials)
           /*  fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch((error) => console.error("Error:", error)); */
        } else {
            alert("Verify the provided info and try again.");
        }
    };

    return (
        <>
            <FormContainer
                onSubmit={handleLogin}
              >
                <LogInRegistrationTittle>LOG IN</LogInRegistrationTittle>
                <FormLabels>
                    Email *
                    <Inputboxes type="text" name="email" />
                </FormLabels>
                <FormLines></FormLines>
                <FormLabels>
                    Password *
                    <Inputboxes type="text" name="password" />
                </FormLabels>
                <FormLines></FormLines>
                <ButtonsContainer>

                <Btn type="submit">
                    <BtnLoginContent>Log in</BtnLoginContent>
                </Btn>
                <NoMainBtn>
                    <NoMainBtnContent>Register</NoMainBtnContent>
                </NoMainBtn>

                </ButtonsContainer>
            </FormContainer>
        </>
    );
};

export default LogIn;
