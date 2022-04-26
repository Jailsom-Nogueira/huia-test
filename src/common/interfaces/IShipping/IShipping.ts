export interface IShipping {
  productWeight: number,
  productLength: number,
  productHeight: number,
  productWidth: number,
  productDiameter: number,
  productDeclaredValue: number
};

export interface IParams {
  nCdEmpresa: string; 
  sDsSenha: string; 
  nCdServico: string; 
  sCepOrigem: string; 
  nCdFormato: string; 
  sCdMaoPropria: string; 
  sCepDestino: string; 
  nVlPeso: number; 
  nVlComprimento: number; 
  nVlAltura: number; 
  nVlLargura: number; 
  nVlDiametro: number; 
  nVlValorDeclarado: number; 
  sCdAvisoRecebimento: string; 
}