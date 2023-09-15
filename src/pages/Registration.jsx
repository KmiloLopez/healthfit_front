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
  FormContainer,
  ButtonsContainer,
} from "../styles/ComponentStyles";

const Registration = () => {
  const handleRegister = (e) => {
      e.preventDefault();
      const { email, password, name } = e.target.elements;
      const body = {
        name: name.value,
          email: email.value,
          password: password.value,
      };

      if (email.value && password.value && name.value) {
        console.log("se hace peticion POST http://localhost:3000/auth/register al backend con las credenciales", body)
         /*  fetch("http://localhost:3000/auth/register", {
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
              onSubmit={handleRegister}
             >
              <LogInRegistrationTittle>REGISTER</LogInRegistrationTittle>
              <FormLabels>
                  Name *
                  <Inputboxes type="text" name="name" />
              </FormLabels>
              <FormLines></FormLines>
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
                  <BtnLoginContent>Register</BtnLoginContent>
              </Btn>
              <NoMainBtn>
                  <NoMainBtnContent>Log in</NoMainBtnContent>
              </NoMainBtn>

              </ButtonsContainer>
          </FormContainer>
      </>
  );
};

export default Registration;
