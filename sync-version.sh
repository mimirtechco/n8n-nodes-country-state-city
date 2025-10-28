#!/bin/bash

# Script para sincronizar a versão do package.json com a última release do GitHub
# Uso: ./sync-version.sh

# Verificar se estamos em um repositório git
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "Erro: Este não é um repositório git"
    exit 1
fi

# Obter a última tag do git
LATEST_TAG=$(git describe --tags --abbrev=0 2>/dev/null)

if [ -z "$LATEST_TAG" ]; then
    echo "Nenhuma tag encontrada no repositório"
    exit 1
fi

# Remover o prefixo 'v' se presente
VERSION=${LATEST_TAG#v}

echo "Última tag encontrada: $LATEST_TAG"
echo "Versão a ser definida: $VERSION"

# Atualizar a versão no package.json
npm version $VERSION --no-git-tag-version

echo "Versão do package.json atualizada para $VERSION"

# Verificar se há mudanças para commit
if ! git diff --quiet package.json package-lock.json; then
    echo "Deseja fazer commit das alterações? (y/n)"
    read -r RESPONSE
    if [[ "$RESPONSE" =~ ^[Yy]$ ]]; then
        git add package.json package-lock.json
        git commit -m "chore: sync package version to $VERSION"
        echo "Commit realizado com sucesso"
    fi
else
    echo "Nenhuma alteração necessária - versão já está sincronizada"
fi