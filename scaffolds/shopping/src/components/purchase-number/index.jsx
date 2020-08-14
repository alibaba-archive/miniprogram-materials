Component({
  mixins: [],
  data: {},
  props: {
    value: 1,
    max: 1,
    onChange: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    plus() {
      const { value, max, onChange } = this.props;

      if (value < max) {
        onChange(value + 1);
      }
    },
    subtract() {
      const { value, onChange } = this.props;
      
      if (value > 1) {
        onChange(value - 1);
      }
    },
  },
});
