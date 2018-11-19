'use strict';

export const literal = Symbol('literal');
export const type = Symbol('type');
export const inline = Symbol('inline.array');
export const simple = Symbol('simple.type.inference');
export const extend = Symbol('generic.extends.keyword');
export const imports = Symbol('generic.imports.keyword');

export const go = {
  struct: Symbol('golang.struct'),
  entity: Symbol('golang.entity') // marks where to put an entity.go file that references all subtypes
};

export const ts = {
  interface: Symbol('typescript.interface')
};


export const swift = {
  struct:  Symbol('swift.struct'),
  extension: Symbol('swift.extension')
};
