# Configuring IPv4 Settings

Module: Data Application Unit
Source: 3b49f87ba9354ead.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Control
 > 
Configuring IPv4 Settings
Configuring IPv4 Settings
// *****************************************************************************
// Enable static IPv4 address configuration and configure the subnet mask,
// the address of the DAU and the address of the gateway.
// *****************************************************************************
CONFigure:DATA:CONTrol:IPVFour:ADDRess:TYPE STATic
CONFigure:DATA:CONTrol:IPVFour:STATic:SMASk '255.255.255.0'
CONFigure:DATA:CONTrol:IPVFour:STATic:IPADdress '192.168.168.180'
CONFigure:DATA:CONTrol:IPVFour:STATic:GIP '192.168.168.1'
// *****************************************************************************
// Verify which addresses are really currently used.
// *****************************************************************************
SENSe:DATA:CONTrol:IPVFour:CURRent:IPADdress?
SENSe:DATA:CONTrol:IPVFour:CURRent:SMASk?
SENSe:DATA:CONTrol:IPVFour:CURRent:GIP?
// *****************************************************************************
// Query the DUT address pool, delete the first entry and add a new entry.
// *****************************************************************************
SENSe:DATA:CONTrol:IPVFour:STATic:ADDResses:CATalog?
CONFigure:DATA:CONTrol:IPVFour:STATic:ADDResses:DELete 0
CONFigure:DATA:CONTrol:IPVFour:STATic:ADDResses:ADD '192.168.168.22'
// *****************************************************************************
// If you configure the DUT address pool via DHCP or use the automatic
// standalone configuration, you can query the pool via the following commands.
// *****************************************************************************
SENSe:DATA:CONTrol:IPVFour:DHCP:ADDResses:CATalog?
SENSe:DATA:CONTrol:IPVFour:AUTomatic:ADDResses:CATalog?
Top