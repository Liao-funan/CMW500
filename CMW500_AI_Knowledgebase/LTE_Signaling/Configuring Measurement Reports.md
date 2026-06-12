# Configuring Measurement Reports

Module: LTE Signaling
Source: 641b40533ff440d9.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Configuring Measurement Reports
Configuring Measurement Reports
// *****************************************************************************
// Set reporting interval, enable measurement gaps, set gap period,
// filter coefficient RSRP, filter coefficient RSRQ, WCDMA measurement quantity
// and SCell measurement cycle. Enable measurement reports.
// *****************************************************************************
CONFigure:LTE:SIGN:UEReport:RINTerval I640
CONFigure:LTE:SIGN:UEReport:MGENable ON
CONFigure:LTE:SIGN:UEReport:MGPeriod G080
CONFigure:LTE:SIGN:UEReport:FCOefficient:RSRP FC4
CONFigure:LTE:SIGN:UEReport:FCOefficient:RSRQ FC4
CONFigure:LTE:SIGN:UEReport:WMQuantity ECNO
CONFigure:LTE:SIGN:UEReport:MCSCell SF640
CONFigure:LTE:SIGN:UEReport:ENABle ON
Top