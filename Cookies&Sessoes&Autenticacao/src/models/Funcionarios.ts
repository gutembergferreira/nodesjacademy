import {
  Table,
  Model,
  Column,
  DataType,
  IsUUID,
  PrimaryKey,
  AllowNull,
  IsEmail,
  Unique,
  ForeignKey,
  BelongsTo,
  HasMany,
  Min,
  Max,
  Length,
} from 'sequelize-typescript';
import { Departamentos } from './Departamentos';
import { Dependentes } from './Dependentes';

@Table({
  timestamps: true,
})
export class Funcionarios extends Model {
  @IsUUID('all')
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
  })
  id!: string;

  @AllowNull(false)
  @Length({ min: 2, max: 50, msg: 'O nome precisa conter entre 2 e 50 caracteres' })
  @Column({
    type: DataType.STRING,
  })
  name!: string;

  @AllowNull(false)
  @Length({ min: 2, max: 100, msg: 'O endereço precisa conter entre 2 e 100 caracteres' })
  @Column({
    type: DataType.STRING,
  })
  endereco!: string;

  @AllowNull(false)
  @Length({ min: 8, max: 15, msg: 'O telefone precisa conter entre 8 e 15 caracteres' })
  @Column({
    type: DataType.STRING,
  })
  fone!: string;

  @AllowNull(false)
  @Unique
  @IsEmail
  @Column({
    type: DataType.STRING,
  })
  email!: string;

  @AllowNull(false)
  @Min(18)
  @Max(100)
  @Column({
    type: DataType.INTEGER,
  })
  idade!: number;

  @ForeignKey(() => Departamentos)
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
  })
  departamentoId!: string;

  @BelongsTo(() => Departamentos)
  departamento!: Departamentos;

  @HasMany(() => Dependentes)
  dependentes!: Dependentes[];
}