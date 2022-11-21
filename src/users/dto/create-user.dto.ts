/* import { ApiProperty } from '@nestjs/swagger'; */

/* EXEMPLO DE OUTRA FORMA DE TIPAR O DTO PARA O SWAGGER
  
export class CreateUserDto {
  @ApiProperty({
    description: 'Nome utilizado para exibir o dado',
    example: 'Rodrigo Vieira',
  })
name: string; 
}*/

export class CreateUserDto {
  /**
   
   * O nome é nescessário para o login
   * @example Rodrigo Vieira    
   */
  nome: string;

  /**
   * O email é nescessário para o login
   * @example email@email.com
   */
  email: string;
}
