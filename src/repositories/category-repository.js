const mongoose = require("mongoose");
const Category = mongoose.model("Category");

exports.get = async () =>
  await Category.find({ active: true }, "name description _id active");

exports.create = async (data) => {
  await Category(data).save();
};

exports.put = async (id, body) => {
  await Category.findByIdAndUpdate(id, {
    $set: {
      name: body.name,
      description: body.description,
      active: body.active,
    },
  });
};

exports.getById = async (id) =>
  await Category.findOne({ _id: id }, "name description _id active");

exports.deleteById = async (id) => {
  await Category.findByIdAndUpdate(id, {
    $set: {
      active: false,
    },
  });
};
