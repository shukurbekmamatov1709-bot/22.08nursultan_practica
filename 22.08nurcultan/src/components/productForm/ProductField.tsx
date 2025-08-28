import './ProductField.css'

interface ProductFieldProps {
  labelText: string;
  placeholder: string;
  type: 'text' | 'date' | 'number';
  id: string;
}

const ProductFields = (props: ProductFieldProps) => {
  return (
    <div className="productForm_field">
      <label htmlFor={props.id}>{props.labelText}</label>
      <input 
        type={props.type} 
        placeholder={props.placeholder} 
        id={props.id} 
      />
    </div>
  );
};

export default ProductFields;