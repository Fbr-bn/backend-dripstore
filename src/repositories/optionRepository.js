import sequelize from "../config/db.js";
const Option = sequelize.models.ProductOption;

// Buscar todas as opções
export async function findAllOptions() {
  return await Option.findAll();
}

// Buscar opção por ID
export async function findOptionById(id) {
  return await Option.findByPk(id);
}

// Criar nova opção
export async function createOption({
  produto_id,
  title,
  shape,
  radius,
  type,
  values,
}) {
  return await Option.create({
    produto_id,
    title,
    shape,
    radius,
    type,
    values,
  });
}

// Atualizar opção
export async function updateOption(
  id,
  { produto_id, title, shape, radius, type, values }
) {
  const option = await Option.findByPk(id);
  if (!option) return null;
  await option.update({ produto_id, title, shape, radius, type, values });
  return option;
}

// Deletar opção
export async function deleteOption(id) {
  const option = await Option.findByPk(id);
  if (!option) return null;
  await option.destroy();
  return option;
}
