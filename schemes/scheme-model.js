const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove,
};

function find() {
  return db('schemes');
}

function findSteps(id) {
  return db('schemes')
  .select('sch.scheme_name', 'st.step_number', 'st.instructions', 'st.scheme_id')
  .from('schemes as sch')
  .join('steps as st')
  .on('st.scheme_id', '=', 'sch.id')
  // .where({ id : scheme_id });
}

// function findSteps(id) {
//   select 
// }

function findById(id) {
  return db('schemes').where({ id });
}

function add(schemeData) {
  return db('schemes').insert(schemeData);
}

function addStep(stepData, id) {
  console.log("stepData", stepData)
  console.log("schemeID", scheme_id)
  console.log("id", id)
  return db('steps as s')
  .innerJoin('schemes as sc', 'sc.id', '=', 's.scheme_id')
  .where({ scheme_id: id})
}

function update(changes, id) {

}

function remove(id) {

}