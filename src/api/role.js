import request from '@/utils/request'

export function listRole(query) {
  return request({
    url: '/role/list',
    method: 'get',
    params: query
  })
}

export function createRole(data) {
  return request({
    url: '/role/save',
    method: 'post',
    data
  })
}

export function readRole(data) {
  return request({
    url: '/role/read',
    method: 'get',
    data
  })
}

export function updateRole(data) {
  return request({
    url: '/role/edit',
    method: 'post',
    data
  })
}

export function deleteRole(id) {
  return request({
    url: '/role/delete/' + id,
    method: 'get'
  })
}

export function getPermission(query) {
  return request({
    url: '/role/permissions',
    method: 'get',
    params: query
  })
}

export function updatePermission(data) {
  return request({
    url: '/role/permissions',
    method: 'post',
    data
  })
}

export function listRoleOptions() {
  return request({
    url: '/role/listOptions',
    method: 'get'
  })
}
