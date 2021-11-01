export interface PlanModel {
    sku: string,
    franquia: string,
    valor: string,
    aparelho?: {
        nome: string,
        valor: string,
        numeroParcelas: number,
        valorParcela: string
    },
    ativo: boolean
}