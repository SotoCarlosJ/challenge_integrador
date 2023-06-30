const btnRemove = document.getElementById('btn_remove');
const btnAdd = document.getElementById('btn_add');
const itemQty = document.getElementById('item_qty');

btnRemove.addEventListener('click', () => itemQty.value == 0 ? itemQty.value = itemQty.value : itemQty.value = parseInt(itemQty.value) - 1);
btnAdd.addEventListener('click', () => itemQty.value = parseInt(itemQty.value) + 1);