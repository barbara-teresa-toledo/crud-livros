/* eslint-disable react/jsx-no-undef */
import React, { useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #202020;
  padding: 20px;
  box-shadow: 0 0 0 #000;
  border-radius: 20px;

  @media (max-width: 500px) {
    ${"justify-content: space-between"}
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  padding: 0 10px;
  border: 1px solid #fff;
  border-radius: 20px;
  height: 40px;
  @media (max-width: 500px) {
    ${"width: auto"}
  }
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 20px;
  border: none;
  background-color: #bd525c;
  color: #fefefe;
  height: 42px;
`;

const Form = ({ getLivros, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const livro = ref.current;

      livro.titulo.value = onEdit.titulo;
      livro.autor.value = onEdit.autor;
      livro.colecao.value = onEdit.colecao;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const livro = ref.current;

    if (!livro.titulo.value || !livro.autor.value) {
      return toast.warn("Os campos 'título' e 'autor' devem ser preenchidos.");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          titulo: livro.titulo.value,
          autor: livro.autor.value,
          colecao: livro.colecao.value ?? null,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          titulo: livro.titulo.value,
          autor: livro.autor.value,
          colecao: livro.colecao.value ?? null,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    livro.titulo.value = "";
    livro.autor.value = "";
    livro.colecao.value = "";

    setOnEdit(null);
    getLivros();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Título</Label>
        <Input name="titulo" />
      </InputArea>
      <InputArea>
        <Label>Autor</Label>
        <Input name="autor" />
      </InputArea>
      <InputArea>
        <Label>Coleção</Label>
        <Input name="colecao" />
      </InputArea>

      <Button type="submit">Salvar</Button>
    </FormContainer>
  );
};

export default Form;
