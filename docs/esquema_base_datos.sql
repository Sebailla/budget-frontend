CREATE TABLE "usuarios" (
  "id" serial PRIMARY KEY,
  "nombre" varchar,
  "email" varchar UNIQUE,
  "password_hash" text,
  "rol" varchar,
  "creado_en" timestamp
);

CREATE TABLE "categorias" (
  "id" serial PRIMARY KEY,
  "nombre" varchar UNIQUE,
  "descripcion" text
);

CREATE TABLE "formas_pago" (
  "id" serial PRIMARY KEY,
  "nombre" varchar UNIQUE
);

CREATE TABLE "cuentas" (
  "id" serial PRIMARY KEY,
  "nombre" varchar UNIQUE,
  "tipo" varchar,
  "moneda" varchar,
  "detalles" jsonb
);

CREATE TABLE "gastos" (
  "id" bigint PRIMARY KEY,
  "usuario_id" int,
  "fecha" date,
  "categoria_id" int,
  "concepto" varchar,
  "importe" numeric,
  "forma_pago_id" int,
  "cuenta_id" int,
  "nota" text,
  "mes" smallint,
  "anio" smallint,
  "es_fijo" boolean,
  "creado_en" timestamp
);

CREATE TABLE "ingresos" (
  "id" bigint PRIMARY KEY,
  "usuario_id" int,
  "fecha" date,
  "pagador" varchar,
  "concepto" varchar,
  "importe" numeric,
  "cuenta_id" int,
  "nota" text,
  "mes" smallint,
  "anio" smallint,
  "creado_en" timestamp
);

CREATE TABLE "inversiones" (
  "id" bigint PRIMARY KEY,
  "usuario_id" int,
  "fecha" date,
  "categoria" varchar,
  "producto" varchar,
  "comitente" varchar,
  "operacion" varchar,
  "importe" numeric,
  "cuenta_id" int,
  "nota" text,
  "mes" smallint,
  "anio" smallint,
  "total" numeric,
  "estado" varchar,
  "referencia_externa" varchar,
  "creado_en" timestamp
);

CREATE TABLE "retiros_inversiones" (
  "id" bigint PRIMARY KEY,
  "usuario_id" int,
  "inversion_id" bigint,
  "fecha" timestamp,
  "importe" numeric,
  "cuenta_origen_id" int,
  "cuenta_destino_id" int,
  "nota" text,
  "referencia_transferencia" varchar,
  "creado_en" timestamp
);

CREATE TABLE "valuaciones_inversiones" (
  "id" bigint PRIMARY KEY,
  "inversion_id" bigint,
  "fecha" date,
  "valor_mercado" numeric,
  "unidades" numeric,
  "creado_en" timestamp
);

ALTER TABLE "gastos" ADD FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "gastos" ADD FOREIGN KEY ("categoria_id") REFERENCES "categorias" ("id");

ALTER TABLE "gastos" ADD FOREIGN KEY ("forma_pago_id") REFERENCES "formas_pago" ("id");

ALTER TABLE "gastos" ADD FOREIGN KEY ("cuenta_id") REFERENCES "cuentas" ("id");

ALTER TABLE "ingresos" ADD FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "ingresos" ADD FOREIGN KEY ("cuenta_id") REFERENCES "cuentas" ("id");

ALTER TABLE "inversiones" ADD FOREIGN KEY ("usuario_id") REFERENCES "usuarios" ("id");

ALTER TABLE "inversiones" ADD FOREIGN KEY ("cuenta_id") REFERENCES "cuentas" ("id");

ALTER TABLE "retiros_inversiones" ADD FOREIGN KEY ("inversion_id") REFERENCES "inversiones" ("id");

ALTER TABLE "retiros_inversiones" ADD FOREIGN KEY ("cuenta_origen_id") REFERENCES "cuentas" ("id");

ALTER TABLE "retiros_inversiones" ADD FOREIGN KEY ("cuenta_destino_id") REFERENCES "cuentas" ("id");

ALTER TABLE "valuaciones_inversiones" ADD FOREIGN KEY ("inversion_id") REFERENCES "inversiones" ("id");
