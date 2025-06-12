import * as optionRepository from "../repositories/optionRepository.js";

//Controlador que busca todos os options
export async function getAllOptions(req, res) {
  try {
    const options = await optionRepository.findAllOptions();
    return res.json(options);
  } catch (error) {
    console.error("Erro ao buscar todos os options:", error);
    return res.status(400).json({ message: "Erro ao buscar options." });
  }
}

//buscar option por ID
export async function getOptionById(req, res) {
  const { id } = req.params;

  try {
    const option = await optionRepository.findOptionById(id);

    if (!option) {
      return res.status(404).json({ message: "Option não encontrado" });
    }

    return res.status(200).json(option);
  } catch (error) {
    console.error("Erro ao buscar o option pelo id:", error);
    return res.status(400).json({ message: "Erro ao buscar o option por id" });
  }
}

//criar um novo option
export async function createOption(req, res) {
  const { nome, email, telefone } = req.body;

  try {
    const option = await optionRepository.createOption(nome, email, telefone);

    return res.status(201).json({
      message: "Option criado com sucesso",
      option,
    });
  } catch (error) {
    console.error("Erro ao criar o option", error);
    return res.status(400).json({ message: "Erro ao criar o option" });
  }
}

//atualizar o option
export async function updateOption(req, res) {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;

  try {
    const option = await optionRepository.updateOption(id, {
      nome,
      email,
      telefone,
    });

    if (!option) {
      return res.status(404).json({ message: "Option não encontrado" });
    }

    return res.status(200).json({
      message: "Option atualizado com sucesso",
      option,
    });
  } catch (error) {
    console.error("Erro ao atualizar o option", error);
    return res.status(400).json({ message: "Erro ao atualizar o option" });
  }
}

//deleta o option
export async function deleteOption(req, res) {
  const { id } = req.params;

  try {
    const option = await optionRepository.deleteOption(id);

    if (!option) {
      return res.status(404).json({ message: "Option não encontrado" });
    }

    return res.status(200).json({ message: "Option deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar o option", error);
    return res.status(400).json({ message: "Erro ao deletar o option" });
  }
}
