import sketch, { DataSupplier, fromNative } from 'sketch';
import util from 'util';
import { generateIBAN } from './utils/iban-generator';

export const onStartup = () => {
  DataSupplier.registerDataSupplier('public.text', 'Random', 'SupplyRandomIBAN');
};

export const onShutdown = () => {
  DataSupplier.deregisterDataSuppliers();
};

export const onSupplyRandomIBAN = context => {
  const { data } = context;
  const { key } = data;
  const items = util.toArray(data.items).map(fromNative);

  items.forEach((_, index) => {
    DataSupplier.supplyDataAtIndex(key, generateIBAN(), index);
  });
};
