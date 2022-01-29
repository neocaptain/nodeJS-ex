const express = require('express');
const router = express.Router();
const data = {};
const employeesController = require('../../controllers/employeeController')
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(employeesController.getAllEmployees)  // 조회는 권한 체크 하지 않음
    .post(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.createNewEmployees) // 생성은 어드민, 에디터 권한
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), employeesController.updateEmployee) // 수정은 어드민, 에디터 권한
    .delete(verifyRoles(ROLES_LIST.Admin), employeesController.deleteEmployee);  // 삭제은 어드민만

router.route('/:id')
    .get(employeesController.getEmployee);  // 조회는 권한 체크 하지 않음

module.exports = router;