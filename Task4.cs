double faturamentoSP = 67836.43;
double faturamentoRJ = 36678.66;
double faturamentoMG = 29229.88;
double faturamentoES = 27165.48;
double faturamentoOutros = 19849.53;


double faturamentoTotal = faturamentoES + faturamentoMG + faturamentoRJ + faturamentoSP + faturamentoOutros;

double porentagemSP =  (faturamentoSP / faturamentoTotal) * 100;
double porentagemRJ =   (faturamentoRJ / faturamentoTotal) * 100;
double porentagemMG =   (faturamentoMG / faturamentoTotal) * 100;
double porentagemES =   (faturamentoES / faturamentoTotal) * 100;
double porentagemOutros =   (faturamentoOutros / faturamentoTotal) * 100;

Console.WriteLine("SP - {0:F}%", porentagemSP);
Console.WriteLine("RJ - {0:F}%", porentagemRJ);
Console.WriteLine("MG - {0:F}%", porentagemMG);
Console.WriteLine("ES - {0:F}%", porentagemES);
Console.WriteLine("Outros - {0:F}%", porentagemOutros);


