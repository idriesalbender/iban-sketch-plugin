import sketch, { DataSupplier, fromNative, UI } from 'sketch';
import util from 'util';
import DATA from './utils/data.json';
import { generateIBAN } from './utils/iban-generator';

export const onStartup = () => {
  DataSupplier.registerDataSupplier('public.text', 'Specific country...', 'SupplyCountryIBAN');
};

export const onShutdown = () => {
  DataSupplier.deregisterDataSuppliers();
};

export const onSupplyCountryIBAN = context => {
  const { data } = context;
  const { key } = data;
  const items = util.toArray(data.items).map(fromNative);

  const countries = DATA.map(c => c.country.name);

  let result;
  const handleInput = (e, v) => {
    if (e) return;
    result = v;
  };

  const INPUT_CONFIG = {
    message: 'Please select a country:',
    options: {
      type: UI.INPUT_TYPE.selection,
      possibleValues: countries,
    },
    callback: handleInput,
  };

  UI.getInputFromUser(INPUT_CONFIG.message, INPUT_CONFIG.options, INPUT_CONFIG.callback);

  items.forEach((_, index) => {
    DataSupplier.supplyDataAtIndex(key, generateIBAN({ country: result }), index);
  });
};
