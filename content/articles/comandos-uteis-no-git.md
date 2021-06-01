---
title: Comandos Úteis no git
description: Guia prático para comando úteis no git
img: git.png
alt: Git
tag: Git
---

---


<info-box>
<template #info-box>
  <h2>Comandos básicos no Git</h2>
  <p>Vamos baixar o git inicialmente caso não tenha</p>

  ```
    Para windows: https://gitforwindows.org/
  ```
  ```
    Para Linux: sudo apt-get install git-all
  ```
  ```
    Para Mac: http://git-scm.com/download/mac
  ```
  <br>
  <br>
  <h2>Configurando nome e email</h2>
  <p> Com o git instalado abra o terminal execute os comando para configurar seu nome e email.</p>

  ```
    git config --global user.name "Fulano de Tal"
  ```
  ```
    git config --global user.email fulanodetal@exemplo.br
  ```
  <br>
  <br>
  <h2>Criando o repositório</h2>
  <p>repositório local</p>

  ```
    git init
  ```

  <br>
  <br>
  <h2>Clonado um repositório</h2>
  <p>repositório de servidor </p>

  ```
    git clone url-do-repositorio
  ```

  <br>
  <br>
  <h2>Criando uma branch</h2>

  ```
    git branch <nome-da-branch>
  ```

  <br>
  <br>
  <h2>Mudando de branch</h2>

  ```
    git checkout <nome-da-branch>
  ```

   <br>
  <br>
  <h2>Criando a branch e mudando para ela</h2>

  ```
    git checkout -b <nome-da-branch>
  ```

  <br>
  <br>
  <h2>Colocando os arquivos na stage para commit</h2>

  ```
    git add <arquivo> ou git add *
  ```

  <br>
  <br>
  <h2>Remover todos arquivos do working dir</h2>

  ```
    git checkout .
  ```

  <br>
  <br>
  <h2>Fazendo o commit dos arquivos</h2>

  ```
    git commit -m "comentários das alterações"
  ```

  <br>
  <br>
  <h2>Enviando as alterações para o repositório</h2>

  ```
    git push origin master ou  git push origin <nome-da-branch>
  ```

  <br>
  <br>
  <h2>Atualizando sua branch</h2>

  ```
    git pull
  ```
</template>
</info-box>
