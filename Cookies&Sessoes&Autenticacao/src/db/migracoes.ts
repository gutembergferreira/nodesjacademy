export interface MigracaoDB {
  consultas?: Array<{ model: string; query: string }>;
}

const migracoes: Map<number, MigracaoDB> = new Map<number, MigracaoDB>();

migracoes.set(1, {
  consultas: [
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios ADD endereco VARCHAR(45) NOT NULL DEFAULT "";`,
    },
    {
      model: 'Funcionarios',
      query: `ALTER TABLE Funcionarios ADD departamentoId VARCHAR(255) NOT NULL DEFAULT '';`,
    },
  ],
});


export { migracoes };
