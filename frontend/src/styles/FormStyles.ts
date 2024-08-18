import tw, { styled } from 'twin.macro';

export const FormContainer = styled.form`
  ${tw`space-y-4 mb-8 p-6 bg-gray-900 rounded-lg shadow-lg`}
  background-color: rgba(0, 0, 0, 0.9); /* fondo oscuro con opacidad */
  border: 1px solid rgba(255, 105, 180, 0.8); /* borde neón rosa */
  box-shadow: 0 0 15px rgba(255, 20, 147, 0.5); /* sombra neón */
`;
