Session Helper
==============

```javascript
{{Session 'selectedItem'}} // Session.get('selectedItem')

{{Session 'selectedItem' eq='firstItem'}} // Session.equals('selectedItem', 'firstItem')

{{Session 'selectedItem' eq='firstItem' s='active'}} // returns 'active' on success, '' on failure

{{Session 'selectedItem' eq='firstItem' f='muted'}} // returns 'muted' on failure, '' on success

{{Session 'selectedItem' eq='firstItem' s=computeValue}} // returns computeValue()
```